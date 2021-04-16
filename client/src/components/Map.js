import React, { useEffect, useState, useRef } from "react"
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp"
import { getCommunity } from "../network/community"
import useLocalStorage from "react-use-localstorage"

const Map = ({ styling, didRefresh, id }) => {
  const mapContainer = useRef()
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(12)
  const [token] = useLocalStorage("token", "")

  const handleGetCommunity = async () => {
    const response = await getCommunity({ id, token })
    // console.log("community", response.community)
    return response.community
  }

  useEffect(() => {
    console.log("FYI >> map api called")
    ;(async () => {
      const data = await handleGetCommunity()

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/navigation-preview-night-v4",
        center: data ? data?.geometry.coordinates : [lng, lat],
        zoom: zoom,
      })

      map.on("move", () => {
        setLng(map.getCenter().lng.toFixed(4))
        setLat(map.getCenter().lat.toFixed(4))
        setZoom(map.getZoom().toFixed(2))
      })

      // Add pin to the map
      new mapboxgl.Marker()
        .setLngLat(data ? data?.geometry.coordinates : [lng, lat]) // community.geometry.coordinates
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${data.title}</h3><p>${data.location}</p>`
          )
        )
        .addTo(map)
      console.log(lng, lat)
      console.log(didRefresh)
      return () => map.remove()
    })()

    // eslint-disable-next-line
  }, [didRefresh])

  // useEffect(() => {

  // }, [didRefresh])
  return (
    <div className={styling}>
      <div className="map-container" ref={mapContainer} />
    </div>
  )
}

export default Map
