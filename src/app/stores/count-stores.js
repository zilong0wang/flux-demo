import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher'
import {
  EventEmitter
} from 'events'

let _count = 0,
  event_name = 'INCREMENT_COUNT'

function getCount() {
  return _count
}

function incrementCount() {
  _count = _count + 1
}

export let todoStore = Object.assign({}, EventEmitter.prototype, {
  getCount: getCount,

  emitChange: function () {
    this.emit(event_name)
  },

  addChangeListener: function (callback) {
    this.on(event_name, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(event_name, callback)
  }
})

dispatcher.register(action => {
  console.log(`inside cb: ${action}`)
  switch (action.actionType) {
    case 'INCREMENT':
      incrementCount()
      todoStore.emitChange()
      break
  }
})