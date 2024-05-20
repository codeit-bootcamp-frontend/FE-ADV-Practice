import filtersView from './filters.js'

let targetElement
const TEMPLATE = `<ul class="filters">
    <li>
        <a href="#/">All</a>
    </li>
    <li>
        <a href="#/active">Active</a>
    </li>
    <li>
        <a href="#/completed">Completed</a>
    </li>
</ul>`

const events = {
  changeFilter: filter => {
    model.changeFilter(filter)
    render(model.getState())
  }
}

describe('filtersView', () => {
  beforeEach(() => {
    const tempElement = document.createElement('div')
    tempElement.innerHTML = TEMPLATE
    targetElement = tempElement.childNodes[0]
  })

  test('should add the class "selected" to the anchor with the same text of the currentFilter', () => {
    const newCounter = filtersView(targetElement, {
      currentFilter: 'Active'
    }, events)

    const selectedItem = newCounter.querySelector('li a.selected')

    expect(selectedItem.textContent).toBe('Active')
  })
})
