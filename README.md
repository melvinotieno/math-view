# math-view

A web component that renders equations written using mathlive

# Usage

`<math-view latex="x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}"></math-view>`

### Options

- `latex` - The latex string to render
- `tag` - The tag to render the latex string in. Default is `span`
- `defaultmode` - The default mode for rendering (`math`, `inline-math`, `text`). Default is `math`
- `lettershapestyle` - The letter shape style to use (`tex`, `french`, `iso`, `upright`, `auto`). Default is `auto`
