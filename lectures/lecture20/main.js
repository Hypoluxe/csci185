// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    data = await fetch(url).then(response => response.json());
} 
fetchCourses();

function search() {
  /// const i = 200;
    ///console.log(data[i]. Title);
   //// console.log(data[i].Instructors[0]. Name);
    for ( let i = 0; i < data. length; i++)  {
        let instructor = "TBD;"
        if (data[i] .Instructors.length > 0 ){
            instructor = data[i] .Instructors [0] .Name;
        }
        const htmlSnippet =  `
    <section class="course">
    <h2> ${data[i].Code}: ${data [i].Title}</h2>
    <p>
         ${data [i]. Days} &bull;
         ${data [i].Location .FullLocation} &bull;
         ${data [i] .Hours} credit hour(s);
    </p>
    <p><strong> Instructor </strong></p>
</section>
    `;
    document
        .querySelector(".courses")
        .insertAdjacentHTML("beforeend", htmlSnippet);
}
    console.log(data);
    const searchTerm = document.querySelector('#search_term').value;
}
