Write-Host "`nHugo Site Health Check" -ForegroundColor Cyan -BackgroundColor Black
Write-Host "==================`n"

# Check for template conflicts
Write-Host "1. Checking Template Conflicts:" -ForegroundColor Yellow
$templateConflicts = $false

if (Test-Path "themes/soulfire/layouts/_default/home.html") {
    Write-Host "WARNING: home.html exists and conflicts with index.html" -ForegroundColor Red
    Write-Host "  - Only keep index.html for the home page" -ForegroundColor Gray
    $templateConflicts = $true
} else {
    Write-Host "OK: No template conflicts" -ForegroundColor Green
}

# Check for config conflicts
Write-Host "`n2. Checking Config Files:" -ForegroundColor Yellow
$configConflicts = $false

if (Test-Path "config.toml") {
    Write-Host "WARNING: config.toml exists and conflicts with hugo.toml" -ForegroundColor Red
    Write-Host "  - Only keep hugo.toml for configuration" -ForegroundColor Gray
    $configConflicts = $true
} else {
    Write-Host "OK: No config conflicts" -ForegroundColor Green
}

# Check for CSS conflicts
Write-Host "`n3. Checking CSS Location:" -ForegroundColor Yellow
$cssConflicts = $false

if (Test-Path "themes/soulfire/assets/css") {
    Write-Host "WARNING: CSS in assets directory conflicts with static/css" -ForegroundColor Red
    Write-Host "  - Keep CSS only in themes/soulfire/static/css" -ForegroundColor Gray
    $cssConflicts = $true
} else {
    Write-Host "OK: CSS location is correct" -ForegroundColor Green
}

# Check required files
Write-Host "`n4. Checking Required Files:" -ForegroundColor Yellow
$missingFiles = $false

$requiredFiles = @(
    @{Path="themes/soulfire/layouts/index.html"; Purpose="Main home page template"},
    @{Path="themes/soulfire/layouts/_default/baseof.html"; Purpose="Base template for all pages"},
    @{Path="themes/soulfire/layouts/_default/list.html"; Purpose="Section list template"},
    @{Path="themes/soulfire/layouts/_default/single.html"; Purpose="Single page template"},
    @{Path="content/_index.md"; Purpose="Home page content"},
    @{Path="content/posts/_index.md"; Purpose="Posts section"},
    @{Path="content/stories/_index.md"; Purpose="Stories section"},
    @{Path="content/non-fiction/_index.md"; Purpose="Non Fiction section"},
    @{Path="content/links/_index.md"; Purpose="Links section"}
)

foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file.Path)) {
        Write-Host "WARNING: Missing $($file.Path)" -ForegroundColor Red
        Write-Host "  Purpose: $($file.Purpose)" -ForegroundColor Gray
        $missingFiles = $true
    }
}

if (-not $missingFiles) {
    Write-Host "OK: All required files present" -ForegroundColor Green
}

# Summary and recommendations
Write-Host "`nRecommendations:" -ForegroundColor Magenta
if ($templateConflicts -or $configConflicts -or $cssConflicts -or $missingFiles) {
    Write-Host "`nIssues Found:" -ForegroundColor Yellow
    
    if ($templateConflicts) {
        Write-Host "Template Fixes:" -ForegroundColor Yellow
        Write-Host "1. Remove home.html if it exists"
        Write-Host "2. Use index.html for home page"
    }
    
    if ($configConflicts) {
        Write-Host "`nConfig Fixes:" -ForegroundColor Yellow
        Write-Host "1. Remove config.toml"
        Write-Host "2. Use hugo.toml for configuration"
    }
    
    if ($cssConflicts) {
        Write-Host "`nCSS Fixes:" -ForegroundColor Yellow
        Write-Host "1. Keep CSS only in static/css"
        Write-Host "2. Remove CSS from assets directory"
    }
    
    Write-Host "`nQuick Fix:" -ForegroundColor Yellow
    Write-Host "Run: git checkout hugo; git reset --hard origin/hugo; git clean -fd"
} else {
    Write-Host "OK: Site structure is healthy" -ForegroundColor Green
}

Write-Host "`nContent Update Tips:" -ForegroundColor Cyan
Write-Host "1. Keep front matter exactly as-is (title, date)"
Write-Host "2. Only update content below front matter"
Write-Host "3. Avoid duplicate headings in content (they're in the header)"
Write-Host "4. Let templates handle the structure"

Write-Host "`nRun this script whenever Hugo stops working to check for common issues.`n"
