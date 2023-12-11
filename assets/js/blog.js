    document.addEventListener("DOMContentLoaded", function () {
        const loadMoreBtn = document.getElementById("loadMoreBtn");
        const loadMoreSection = document.getElementById("loadMoreSection");
        // const contentContainer = document.getElementById("content");

        // Additional content
        const additionalContent = [
            `<div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/employment_opportunity.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog5.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/employment_opportunity.html" class="text-decoration-none blog-title blog-title">
            Employment opportunities!
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/job_market.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog8.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/job_market.html" class="text-decoration-none blog-title blog-title">
               The Job Market In 2023
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/job_race.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog6.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category"> IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/job_race.html" class="text-decoration-none blog-title blog-title">
              Get Ahead Of The Job Race
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/professional_exam.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/blogimg.jpg">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Others</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/professional_exam.html" class="text-decoration-none blog-title blog-title">
            Clear Any Professional Exam
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/first_itjob.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog7.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/first_itjob.html" class="text-decoration-none blog-title blog-title">
            Your First IT Job Interview
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./blog/dynamic_indian_job.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog4.png">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
            </div>
        </div>
        </a>
        <a href="./blog/dynamic_indian_job.html" class="text-decoration-none blog-title blog-title">
            Dynamic Indian Job Market
        </a>
    </div>
    <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./blog/dynamics_of_it.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog11.png">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">IT Jobs</h2>                   
            </div>
        </div>
        </a>
        <a href="./blog/dynamics_of_it.html" class="text-decoration-none blog-title blog-title">
        Dynamics Of The IT Job Market And Fresh Graduates
        </a>
    </div>
    <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./blog/tech_interviews.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog12.png">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
            </div>
        </div>
        </a>
        <a href="./blog/tech_interviews.html" class="text-decoration-none blog-title blog-title">
        Clear Technical Interviews
        </a>
    </div>`,
            // Add more content here
        ];
        let currentContentIndex = 0;
        const itemsToShow = 2;
    
        const showMoreContent = () => {
            for (let i = 0; i < itemsToShow; i++) {
                if (currentContentIndex < additionalContent.length) {
                    const content = additionalContent[currentContentIndex];
                    loadMoreSection.insertAdjacentHTML('beforeend', content); // Insert content at the end of loadMoreSection
                    currentContentIndex++;
                } else {
                    loadMoreBtn.style.display = "none"; // Hide button when all content is loaded
                    break;
                }
            }
            AOS.refresh();
    
        };
    
        loadMoreBtn.addEventListener("click", showMoreContent);
    });
    
    