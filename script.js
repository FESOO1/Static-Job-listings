const jobsContainer = document.querySelector('.jobs');

// DISPLAY DATA FROM JSON

window.addEventListener('DOMContentLoaded', displayDataFromJson);

async function displayDataFromJson() {
    const response = await fetch('./data.json');
    const jobData = await response.json();

    for (let i = 0; i < 10; i++) {
        jobsContainer.innerHTML += `
            <fieldset class="job-itself">
                <legend class="job-itself-mobile-image">
                    <img class="job-itself-mobile-image-itself" src="${jobData[i].logo}">
                </legend>
                <div class="job-itself-left">
                    <div class="job-itself-left-image">
                        <img src="${jobData[i].logo}" class="job-itself-left-image-itself">
                    </div>
                    <div class="job-itself-left-text">
                        <div class="job-itself-left-text-top">
                            <h3 class="job-itself-text-top-company-name">${jobData[i].company}</h3>
                            <div class="job-itself-text-top-inner">
                                <h3 class="job-itself-text-top-new">NEW!</h3>
                                <h3 class="job-itself-text-top-featured">FEATURED</h3>
                            </div>
                        </div>
                        <h2 class="job-itself-left-text-middle job-itself-left-text-position">${jobData[i].position}</h2>
                        <div class="job-itself-left-text-bottom">
                            <h3 class="job-itself-left-text-bottom-job-info">${jobData[i].postedAt}</h3>
                            <hr class="job-itself-left-text-bottom-divider">
                            <h3 class="job-itself-left-text-bottom-job-info">${jobData[i].contract}</h3>
                            <hr class="job-itself-left-text-bottom-divider">
                            <h3 class="job-itself-left-text-bottom-job-info">${jobData[i].location}</h3>
                        </div>
                    </div>
                </div>
                <div class="job-itself-right">
                </div>
            </fieldset>
        `;


        // BUTTONS CONTAINER
        const jobItselfRightButtonsContainer = document.querySelectorAll('.job-itself-right');
        const lengtOfButtons = jobData[i].languages.length + jobData[i].tools.length + 2;
        console.log(lengtOfButtons)
        /* jobItselfRightButtonsContainer.innerHTML += `<button type="button" class="job-itself-right-button">${jobData[i]}</button>`; */
        /* for (let secondIterator = 0; secondIterator < lengtOfButtons; secondIterator++) {
            jobItselfRightButtonsContainer[i].innerHTML += `
                <button type="button" class="job-itself-right-button">${jobData[i].level}</button>
                <button type="button" class="job-itself-right-button">${jobData[i].languages[secondIterator]}</button>
            `;
        }; */
    };
};