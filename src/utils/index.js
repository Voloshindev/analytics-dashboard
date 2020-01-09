import { Observable } from 'rxjs'

function randomValue(withInterval) {
  const min = 100
  const max = 2000
  let rand = withInterval
    ? min + Math.random() * (max + 1 - min)
    : Math.random() * 100
  return Math.floor(rand)
}

function setNextWithInterval(paramTitle, subscriber, interval) {
  setInterval(
    () => {
      subscriber.next({
        title: paramTitle,
        value: interval > 1000 ? 'N/A' : randomValue() + 't',
      })
      interval = randomValue(true)
    },
    interval < 1001 ? interval : 1000
  )
}

class EventEmitter {
  observable = new Observable(subscriber => {
    let temperatureInterval = randomValue(true)
    let airPressureInterval = randomValue(true)
    let humidityInterval = randomValue(true)

    setNextWithInterval('Temperature', subscriber, temperatureInterval)
    setNextWithInterval('Air pressure', subscriber, airPressureInterval)
    setNextWithInterval('Humidity', subscriber, humidityInterval)
  })

  on(eventName, fn) {
    if ('data' === eventName) {
      this.observable.subscribe(value => {
        fn(value)
      })
    }
  }
}

export default EventEmitter
