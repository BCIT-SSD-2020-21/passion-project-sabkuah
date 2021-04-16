import React, { useState, useEffect } from "react"
import { TextField } from "@material-ui/core"
import Modal from "react-bootstrap/Modal"
import InputAdornment from "@material-ui/core/InputAdornment"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import { editCommunity } from "../network/community"
import useLocalStorage from "react-use-localstorage"
import { getCommunity } from "../network/community"

const EditCommunityModal = ({ id, show, setShow }) => {
  const [token] = useLocalStorage("token", "")

  const [community, setCommunity] = useState(null)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")

  const handleGetCommunity = async () => {
    const response = await getCommunity({ id, token })
    // console.log("community", response.community)
    return response.community
  }

  const handleComunityUpdate = async (e) => {
    e.preventDefault()
    try {
      const communityData = { title, description, location }
      const response = await editCommunity(communityData, token, id)
      console.log(response)
      // response && setRefreshPost(response);
      //   response && setShow(false)
    } catch (e) {
      console.log("Error creating community", e)
    }
  }

  useEffect(() => {
    ;(async () => {
      const data = await handleGetCommunity()
      setTitle(data.title)
      setDescription(data.description)
      setLocation(data.location)
      setCommunity(data)
    })()

    // eslint-disable-next-line
  }, [id])

  console.log("COMMUNITTTY", { title, description, location })
  return (
    <div>
      {community ? (
        <>
          <Modal
            show={show}
            backdrop="static"
            keyboard={false}
            style={{ marginTop: "5%" }}
          >
            <h2 className="modal-title">Edit Community</h2>

            <div className="modal-body">
              <button className="modal-btn" onClick={() => setShow(false)}>
                X
              </button>
              <form className="modal-form" onSubmit={handleComunityUpdate}>
                <TextField
                  required
                  value={title}
                  variant="outlined"
                  label="Title"
                  placeholder="Title"
                  id="Title"
                  className="modal-form-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  required
                  value={location}
                  variant="outlined"
                  label="location"
                  placeholder="location"
                  id="location"
                  className="modal-form-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setLocation(e.target.value)}
                />

                <TextField
                  required
                  value={description}
                  variant="outlined"
                  label="Description"
                  multiline={true}
                  id="email"
                  className="modal-form-input"
                  rows={5}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Modal.Footer>
                  <button className="modal-btn">Update</button>
                </Modal.Footer>
              </form>
            </div>
          </Modal>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default EditCommunityModal
