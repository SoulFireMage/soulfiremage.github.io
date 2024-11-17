---
title: "Monogame SnowFlakes - 2015 #FsAdvent Entry"
date: 2015-12-15
draft: false
---

*Note: This post originally included two snowflake images - a blue F# snowflake logo and a white geometric snowflake pattern. The images will need to be recovered from the original site.*

Welcome to my #FSAdvent blog entry for the [F# Advent event 2015](http://sergeytihon.com/2015/10/25/f-advent-calendar-in-english-2015/) and thank you Sergey Tihon for organising it!. Last week [Phillip Trelford](https://twitter.com/ptrelford) introduced me to Monogame by way of a worked example using sprites.

So I decided building on his help wasn't enough, I thought I'd pinch a little more of his code and build a simple snowflake program. This post perhaps fits in nicely with [Steve Pemberton's who had time to work out how to do this in WPF but not Monogame](http://blogs.msdn.com/b/stevepemberton/archive/2015/12/14/f-advent-2015-snow-day.aspx).

One nice selling point with F# is it's pragmatic paradigm programming practical philosophy (I ran out of P words!). In other words, I get to abuse mutable values, override some OOP stuff whilst working with more functional types. This makes using the language with Monogame quite accessible.

The complete solution is either [as a Gist](https://gist.github.com/soulfiremage/3199bd04d277567c4b33) or you can have the [visual studio solution](https://github.com/soulfiremage/monogame_snowflakes). For the blog, I've omitted much boilerplate, see the full gist above to get your own working sample!

*Note: The original post included a screenshot of the snowflakes in action here.*

## The Unique Selling Points

* Spinning flakes - each with their own spin (yay!)
* There are two types of flake - the idea for the first type came from my partner who said "why don't you have falling F#'s?". So I did - only here the flakes in question are somewhat 3D and rotated 6 ways. You might have to look closely however.
* Unique flakes AND F# flakes
* Control of flake size - also affects complexity
* Some control over speed, wind direction, flakes etc.
* Uses monogame and sharpDx for GPU goodness
* Mildly lengthy code crying out for code golf - *ok full on refactoring*

## Controls

* **Up**: Speed flakes up
* **Down**: Slow flakes down
* **Left**: Blow flakes to the left
* **Right**: Blow flakes to the right
* **Add**: Increase flake size & complexity
* **emMinus**: Decrease flake size & complexity
* **F**: Decrease flake count (also reset the letter in the flake!)
* **Space**: Increase flake count
* **S,E,B**: Each one changes the content in the 3D flake

## Implementation Details

Below is a snip showing the fun use of some inline shader language code for those that are interested:

```fsharp
let computeShader =
    let code = @"
        RWTexture2D<float4> Output;

        [numthreads(32, 32, 1)]
        void main( uint3 threadID : SV_DispatchThreadID )
        {
            for (int i = 1.0f; i <= 1280.0f; i+=320.0f){
                Output[threadID.xy] = float4(threadID.xy / i, 0, 1);
            }
        }"
```

### The Game Loop

Monogame is an open-source implementation of the XNA framework. It provides a game loop and basic infrastructure:

```fsharp
type Game1() =
    inherit Game()
    let graphics = new GraphicsDeviceManager(null)
    let mutable spriteBatch = null
    
    override x.Initialize() =
        spriteBatch <- new SpriteBatch(x.GraphicsDevice)
        base.Initialize()
    
    override x.Update (gameTime) =
        // Update game state
        base.Update(gameTime)
    
    override x.Draw (gameTime) =
        // Draw your game elements
        base.Draw(gameTime)
```

### Creating Textures

For creating textures from bitmaps:

```fsharp
let bitmapToMemoryStream (bitmap:Bitmap) =
    use ms = new MemoryStream()
    bitmap.Save(ms, ImageFormat.Png)
    ms.Position <- 0L
    ms
```

### Snowflake Generation

The core flake creation logic:

```fsharp
let makeFlake() =
    let size = random.Next(minSize, maxSize)
    { X = random.Next(0, screenWidth)
      Y = random.Next(-50, 0)
      Size = size
      Rotation = 0.0f
      SpinRate = (random.Next(1, 10) |> float32) * 0.01f
      Velocity = size |> float |> (*) 0.1 }
```

## Development Journey

I started looking at a graphics idea a few weeks back when Sergey announced the [#FsAdvent](https://twitter.com/hashtag/fsadvent). In between prepping for job interviews (in C#!) and other things, I started looking at [WriteableBitmapEx (see sample)](http://writeablebitmapex.codeplex.com/) as well as [SlimDX](https://slimdx.org/).

Whilst this led down some interesting by-ways, I didn't master how to do actual animation this way in the time I had left. This led to a Twitter exchange with Phil who did my ego the world of good by solving the problem on a train journey, thanks Phil :). However, he also kindly gave me the starting point for using Mono for the same purpose. The work here has been built from that starting point.

*Note: Several code sections from the original post are currently missing, including:*
- Detailed flake animation code
- Wind and velocity calculations
- Screen boundary checking
- Sprite rendering implementation

*These sections can be found in the complete source code linked at the top of the post.*
