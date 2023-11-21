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
    document.querySelector(".courses").innerHTML +=  `
    <section class="course">
    <h2> ${data[i].Code}: ${data [i].Title}</h2>
    <p>
         ${data [i]. Days} &bull;
         ${data [i].Location .FullLocation} &bull;
         ${data [i] .Hours} credit hour(s);
    </p>
    <p><strong> TBD </strong></p>
</section>
    `;
}
    console.log(data);
    const searchTerm = document.querySelector('#search_term').value;
}
