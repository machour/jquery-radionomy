# jQuery Radionomy

## Introduction

This is a jQuery plugin which will embed a [radionomy](http://radionomy.com/) web radio in your page.
It also allow you to define page width breakpoints which will cause the player to be resized as you see it fit.

## Installation

### bower

Via [Bower][]:

```
$ bower install jquery-radionomy
```

Or, add `jquery-radionomy` to your app's `bower.json`.

``` json
  "dependencies": {
    "jquery-radionomy": "latest"
  }
```

### standalone

pjax can be downloaded directly into your app's public directory - just be sure you've loaded jQuery first.

```
curl -LO https://raw.github.com/machour/jquery-radionomy/master/jquery.radionomy.js
```

**WARNING** Do not hotlink the raw script url. GitHub is not a CDN.

## Usage

``` javascript
$('#myDivThatWillBeReplaced').radionomy(options, breakpoints);
``` 

### options

The `options` parameter is the array of configuration for Radionomy itself:

| Name  | Description | Default value |
|---|---|---|
| url  | Your radio id | *(required)* |
| autoplay  | Whether to auto play the radio or not | 0 |
| volume  | Your radio id | *(required)* |
| type  | Layout type. Valid types are: horizontal / medium / mobile | horizontal |
| color1  | Background color for radio overlays | #f1ffc4 |
| color2  | Foreground color for radio overlays | #ff844f |
| language | The radio language | en |
| version | The radionomy internal version number | 1.1 |

### breakpoints

The `breakpoints` parameter should be a **numerically and ascendantly** sorted object composed of `width` => `type` properties.
The plugin will watch for the page width and will use the releveant Radionomy embed type.
This parameter can be ommited if you don't need this "responsive" feature.

## Example

``` javascript
$('#myDivThatWillBeReplaced').radionomy({
    url: 'my-radio-id',
    type: 'horizontal'
    autoplay: 1
  }, {
    // Make sure you keep the entries numerically sorted !
    400: 'mobile', // use mobile format when page width <= 400
    800: 'medium', // guess on your own now
    1000: 'horizontal'
}); 
```

