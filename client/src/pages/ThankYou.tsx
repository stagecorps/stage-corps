import { FC } from "react";

const ThankYou: FC = () => {
    return (
        <main>
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Form Submitted</h1>
                </div>
            </div>
            <section id="starter-section" className="starter-section section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Thanks!</h2>
                    <p>We will be in touch with you soon!</p>
                </div>
            </section>
        </main>
    )
}

export default ThankYou;