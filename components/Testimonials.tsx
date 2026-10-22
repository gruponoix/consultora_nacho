import StaggerTestimonials from "./StaggerTestimonials";

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonios-h">
      <div className="wrap">
        <div className="section-head center reveal">
          <p className="eyebrow eyebrow--center">Prueba social</p>
          <h2 className="section-title" id="testimonios-h">
            La voz de quienes ya confiaron
          </h2>
          <p className="section-sub">
            Lo que dicen los directores y propietarios de hotel sobre trabajar con nosotros. Pulsa
            una tarjeta o usa las flechas para recorrerlas.
          </p>
        </div>
      </div>
      <StaggerTestimonials />
    </section>
  );
}
