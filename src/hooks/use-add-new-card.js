import { useState } from "react";
import { getImageUrl } from "../services/images";

const useAddNewCard = (addNewCard) => {
    const [nameError, setNameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [reviewError, setReviewError] = useState("");
  
    const handleLimitInput = (field, setError) => {
      if (field.length < 6 || field.length > 40) {
        setError(`*${field} must be between 6 to 40 characters long.`);
        setTimeout(() => {
          setError("");
        }, 3000);
        return false;
      } else {
        setError("");
        return true;
      }
    };
  
    const resetForm = () => {
      document.querySelector('[name="adding-name"]').value = "";
      document.querySelector('[name="adding-description"]').value = "";
      document.querySelector('[name="adding-review"]').value = "";
      document.querySelector('[name="adding-image"]').selectedIndex = 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const name = e.target.elements["adding-name"].value;
      const description = e.target.elements["adding-description"].value;
      const review = e.target.elements["adding-review"].value;
      const imageValue = e.target.elements["adding-image"].value;
  
      if (
        handleLimitInput(name, setNameError) &&
        handleLimitInput(description, setDescriptionError) &&
        handleLimitInput(review, setReviewError)
      ) {
        const imageUrl = getImageUrl(imageValue);
        const id = Math.floor(Math.random() * 1000);
        const newGame = { id, name, description, review, img: imageUrl };
        addNewCard(newGame);
  
        resetForm();
      }
    };
  
    return {
      nameError,
      descriptionError,
      reviewError,
      handleLimitInput,
      handleSubmit,
    };
  };

  export default useAddNewCard;