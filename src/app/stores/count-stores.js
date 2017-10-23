import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher'
import {
  EventEmitter
} from 'events'

let _count = 0

function getCount() {
  return _count
}

function incrementCount() {
  _count = _count + 1
}

//TODO define the actual store
export let todoStore = Object.assign({}, EventEmitter.prototype, {
  getCount: getCount,

  emitChange: function () {
    this.emit('CHANGE_EVENT')
  },

  addChangeListener: function (callback) {
    this.on('CHANGE_EVENT', callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener('CHANGE_EVENT', callback)
  }
})

//TODO register with the dispatcher
dispatcher.register(action => {
  console.log(`inside cb: ${action}`)
  switch (action.actionType) {
    case 'INCREMENT':
      incrementCount()
      todoStore.emitChange()
      break
  }
})