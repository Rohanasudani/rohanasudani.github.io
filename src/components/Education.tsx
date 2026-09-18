import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="content-section">
      <div className="section-head">
        <span className="section-eyebrow">04 // Academics & Learning</span>
        <h2 className="section-title">Education & Credentials</h2>
      </div>

      <div className="education-stack">
        {education.map((item) => (
          <div key={item.school} className="education-card">
            <div className="education-card-header">
              <div>
                <h3 className="school-name">{item.school}</h3>
                {item.college && <p className="college-name">{item.college}</p>}
                <p className="degree-name">{item.degree}</p>
              </div>
              <div className="education-status-meta">
                <span className="timeline-badge">{item.expected}</span>
                {item.location && <span className="location-text">{item.location}</span>}
              </div>
            </div>

            {item.honors && item.honors.length > 0 && (
              <div className="honors-row">
                <span className="honors-tag">★ {item.honors.join(' · ')}</span>
              </div>
            )}

            {item.coursework && (
              <div className="coursework-box">
                <p className="coursework-title">Selected Coursework & Curriculum:</p>
                <div className="coursework-tags">
                  {item.coursework.map((course) => (
                    <span key={course} className="course-chip">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.topics && (
              <div className="coursework-box">
                <p className="coursework-title">Applied Topics Covered:</p>
                <div className="coursework-tags">
                  {item.topics.map((topic) => (
                    <span key={topic} className="course-chip">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
