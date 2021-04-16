import React, { useState } from "react"
import { TextField } from "@material-ui/core"
import Modal from "react-bootstrap/Modal"
import InputAdornment from "@material-ui/core/InputAdornment"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import { addCommunity } from "../network/community"
import useLocalStorage from "react-use-localstorage"

const EditCommunityModal = ({ community, show, setShow }) => {
  const [token] = useLocalStorage("token", "")

  const [title, setTitle] = useState(community.title)
  const [description, setDescription] = useState(community.description)
  const [location, setLocation] = useState(community.location)

  const handleComunityUpdate = async (e) => {
    e.preventDefault()
    try {
      console.log({ title, description, location })
      //   const response = await addCommunity(community, token)
      //   console.log(response)
      //   // response && setRefreshPost(response);
      //   response && setShow(false)
    } catch (e) {
      console.log("Error creating community", e)
    }
  }

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
