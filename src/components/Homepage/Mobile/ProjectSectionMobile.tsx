'use client';

export default function ProjectSectionMobile() {


    return (
        <section className="section">
            <div className="container">
                <div className="projects-title-wrapper">
                    <h2 className="text-sb">Our Projects</h2>

                    <p className="text-14 text-rg">
                        A curated selection of work that reflects how we
                        design, build, and deliver impactful digital
                        experiences.
                    </p>
                </div>

                <div className="projects-wrapper">
                    <div className="project-card-mobile project-card-mobile-1">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/djk-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div className="project-card-mobile project-card-mobile-2">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/autobot-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div className="project-card-mobile project-card-mobile-3">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/cameriz-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div className="project-card-mobile project-card-mobile-4">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/ra-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div className="project-card-mobile project-card-mobile-5">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/steamovap-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </section>
    );
}