import React, { useEffect, useState } from "react";
import AllRoutes from "./utils/Routes/Routes.js";
import bootstrapStyles from "./utils/BootstrapStyles/BootstrapStyles.js";
const { app } = bootstrapStyles;
const { cards, button, round, tours, pleaseEmail, editButton } = app;

export default function App() {
  // const UPLOAD_STATES = {
  //   NONE: 0,
  //   UPLOADING: 1,
  //   FINISHED: 2,
  // };

  const [editTarget, setEditTarget] = useState("");
  const [appState, setAppState] = useState(false);

  useEffect(() => {
    const toggleToggle = (event) => {
      const { id } = event.target;
      if (editTarget !== id) {
        setEditTarget(id);
      }
    };

    setAppState({
      navState: { adminView: false },
      homeState: {
        body: {
          para: [
            <p key="para1">
              Tree of Life Learning Center is a private, family-owned,
              developmentally-based Jewish preschool. We are located across from
              the Sycamore Valley Park and Sycamore Valley Elementary School.
              Our school is surrounded by the beautiful, lush rolling hills of
              Danville. We offer full-day, part-day, and school-day programs for
              children ages 2 – 5 years-old.
            </p>,
            <p key="para2">
              We believe that small student-teacher ratios allow us to better
              meet the needs of the children in our care. This also allows us to
              support children that may need extra guidance, while also
              supporting the children that may need more of a challenge. We
              strive to keep a six to one student-teacher ratio in the 2
              year-old program, an eight to one ratio in the 3 year-old program
              and a nine to one ratio in the Pre-K program. We are a year round
              school; open Monday through Friday from 7:00am to 6:00pm with the
              exception of major holidays and a spring and winter break. We
              celebrate both Jewish and American holidays. We welcome and
              celebrate children from all religions and backgrounds and work
              with our families to ensure that all family traditions are
              respected and valued.
            </p>,
            <p key="para3">
              As a school, we value the process of learning, exploration and
              discovery. We want every child to gain a love of learning in their
              time here. We view families as a valued part of our community and
              a necessary part of growth and development. We strive to help our
              children establish a strong sense of community and social
              responsibility.
            </p>,
            <p key="para4">
              Send us an email to schedule a tour of our wonderful school!!! We
              look forward to meeting you and your beautiful children. 
            </p>,
          ],
          cards: [
            <div className={cards} id="cards" key="enrolling">
              <button
                id="button"
                className={button}
                to="#"
                onClick={(e) => {
                  window.location.href = "/contact-us";
                  e.preventDefault();
                }}
              >
                Enrolling
              </button>
              <h4 className={round} id="round">
                We are enrolling!
              </h4>
              <p className={round} id="round">
                Our preschool is licensed for children between the ages of 2-5.
                If you're interested, please contact us to schedule a tour!
              </p>
            </div>,
            <div className={tours} id="tours" key="tours">
              <button
                id="button"
                className={button}
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto: mskerri.treeoflife@yahoo.com";
                  e.preventDefault();
                }}
              >
                Tours
              </button>
              <h4 className={round} id="round">
                Tours are available by appointment.
              </h4>
              <p className={pleaseEmail} id="pleaseEmail">
                please email
              </p>
              <a
                className={pleaseEmail}
                id="pleaseEmail"
                href="mailto: mskerri.treeoflife@yahoo.com"
              >
                mskerri.treeoflife@yahoo.com
              </a>
            </div>,
          ],
          editButtons: [
            <button
              className={editButton}
              type="button"
              key="edit-paragraphs"
              id="editButton"
              onClick={toggleToggle}
            >
              Edit Body Text
            </button>,
            <button
              className={editButton}
              type="button"
              key="edit-enrolling"
              id="editButton"
              onClick={toggleToggle}
            >
              Edit Enrolling Text
            </button>,
            <button
              className={editButton}
              type="button"
              key="edit-tours"
              id="editButton"
              onClick={toggleToggle}
            >
              Edit Tours Text
            </button>,
          ],
        },
        carouselState: {
          urls: {
            image1: "https://files.catbox.moe/nhfolx.png",
            image2: "https://files.catbox.moe/8u29q2.png",
            image3: "https://files.catbox.moe/cysajy.png",
          },
          alts: { image1: "Image 1", image2: "Image 2", image3: "Image 3" },
          heldUrls: {
            image1: "https://files.catbox.moe/nhfolx.png",
            image2: "https://files.catbox.moe/8u29q2.png",
            image3: "https://files.catbox.moe/cysajy.png",
          },
        },
      },
      imageUploaderState: {
        uploadState: 0,
        crop: null,
        croppedUrl: null,
      },
    });
  }, [editTarget]);

  if (!appState) {
    return <div />;
  }

  const navButtonsOnOff = (event) => {
    event.target.id === "true"
      ? setAppState({ ...appState, navState: { adminView: true } })
      : setAppState({ ...appState, navState: { adminView: false } });
  };

  const editCarousel = (event) => {
    setAppState({
      ...appState,
      homeState: {
        carouselState: {
          heldUrls: {
            [event.target.key]: event.target.value,
          },
        },
      },
    });
  };

  const editImageUploaderState = (event) => {
    switch (event.target.id) {
      case "uploadState":
        console.log(event.target.id);
        setAppState({
          ...appState,
          imageUploaderState: { uploadState: event.target.id },
        });
        break;
      case "crop":
        setAppState({
          ...appState,
          imageUploaderState: { uploadState: event.target.id },
        });
        break;
      case "croppedUrl":
        setAppState({
          ...appState,
          imageUploaderState: { uploadState: event.target.id },
        });
        break;
      default:
        break;
    }
  };

  const editBody = (event) => {
    setAppState({
      ...appState,
      homeState: { body: { cards: [event.target.value] } },
    });
  };

  return (
    <AllRoutes
      appState={appState}
      editBody={editBody}
      navButtonsOnOff={navButtonsOnOff}
      editCarousel={editCarousel}
      editImageUploaderState={editImageUploaderState}
    />
  );
}
