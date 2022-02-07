/* global C2D */
window.tools.airBrush = {
  name: 'airbrush',
  icon: '/images/airbrush',
  state: {
    selected: false,
    mousePressed: false,
    prevMouse: { x: null, y: null }

  },

  events: {
    mousedown: function () {
      const state = window.tools.airBrush.state
      state.mousePressed = true
    },
    mouseup: function () {
      const state = window.tools.airBrush.state
      state.mousePressed = false
      state.prevMouse = { x: null, y: null }
    },
    mousemove: function (e) {
      const state = window.tools.airBrush.state
      if (state.selected && state.mousePressed) {
        const mouse = C2D.eventToMouse(e)
        const px = state.prevMouse.x || mouse.x
        const py = state.prevMouse.y || mouse.y
        C2D.ctx.lineCap = 'butt'
        C2D.ctx.fill = 'rgba(255, 0, 0, 0.5)'
        C2D.ctx.createRadialGradient(mouse.x, mouse.y, C2D.options.strokeWidth, C2D.options.strokeWidth, px, py)
        C2D.line(mouse.x, mouse.y, px, py)
        state.prevMouse = { x: mouse.x, y: mouse.y }
      }
    }
  }
}
