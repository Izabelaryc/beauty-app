import React from "react";

export default function Test() {
  const [formData, setFormData] = React.useState({
    skin: "",
    eyes: "",
    tan: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <label htmlFor="skin">What is your skin undertone?</label>
        <br />

        <input
          type="radio"
          id="cool"
          name="skin"
          value="cool"
          checked={formData.skin === "cool"}
          onChange={handleChange}
        />
        <label htmlFor="cool">Cool undertones</label>
        <br />

        <input
          type="radio"
          id="warm"
          name="employment"
          value="warm"
          checked={formData.skin === "warm"}
          onChange={handleChange}
        />
        <label htmlFor="warm">warm undertones</label>
        <br />

        <label htmlFor="eyes">What is the color of your eyes?</label>
        <br />

        <input
          type="radio"
          id="intense"
          name="eyes"
          value="intense"
          checked={formData.eyes === "intense"}
          onChange={handleChange}
        />
        <label htmlFor="intense">
          Intense: dark brown/black, cool intensive blue
        </label>
        <br />

        <input
          type="radio"
          id="calm"
          name="eyes"
          value="calm"
          checked={formData.eyes === "calm"}
          onChange={handleChange}
        />
        <label htmlFor="calm">
          Harmonious, moderate, hazel, gray or multicolor
        </label>
        <br />

        <label htmlFor="tan">Do you get tanned easily?</label>
        <br />

        <input
          type="radio"
          id="brown"
          name="tan"
          value="brown"
          checked={formData.tan === "brown"}
          onChange={handleChange}
        />
        <label htmlFor="brown">My skin gets brown easily, no reds</label>
        <br />

        <input
          type="radio"
          id="red"
          name="tan"
          value="red"
          checked={formData.tan === "red"}
          onChange={handleChange}
        />
        <label htmlFor="red">My skins turns red at first</label>
        <br />
      </form>
    </div>
  );
}
