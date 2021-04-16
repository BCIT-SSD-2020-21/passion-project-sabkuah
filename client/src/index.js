import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "../src/styles/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-calendar/dist/Calendar.css"
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp"
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import "../node_modules/toastr/build/toastr.min.css"
import "../node_modules/toastr/build/toastr.min"
import toastr from "toastr"

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
}

mapboxgl.accessToken =
  "pk.eyJ1IjoicnVzc3RlbGVuIiwiYSI6ImNrbGxqdzk3MTA2MnIyb251aTk0d2x5dmsifQ.jkO5-RKmX3yZLf3V8pHwOw"

mapboxgl.workerClass = MapboxWorker

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
