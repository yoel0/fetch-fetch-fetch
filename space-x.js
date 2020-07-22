console.log("this works");
const container = document.querySelector(".container");

fetch("https://api.spacexdata.com/v3/capsules")
  .then((response) => {
    //console.log(response);
    return response.json();
  })
  .then((data) => {
    //console.log(date);
    //const firstElement = data[0];
    //console.log(firstElement);
    //let capsuleID = firstElement.capsule_id;
    //console.log(capsuleID);
    //let details = firstElement.details;
    //console.log(details);
    //let landings = firstElement.landings;
    //console.log(landings);

    for (let i = 0; i < data.length; i++) {
      let eachCapsule = data[i];
      // console.log(eachCapsule);
      const obj = {
        capsuleID: eachCapsule.capsule_id,
        details: eachCapsule.details,
        landings: eachCapsule.landings,
      };
      console.log(obj);

      const capsuleElement = document.createElement("p");
      capsuleElement.textContent = obj.capsuleID;
      container.appendChild(capsuleElement);
    }
  });
