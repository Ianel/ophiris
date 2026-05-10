export default function Training() {
  const courses = [
    {
      title: "Management & Leadership",
      desc: "Unlock your leadership potential with our Management & Leadership program. Gain the skills to inspire your teams, make impactful decisions, and drive meaningful results for your organization.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Human Resources & Social Organization",
      desc: "Enhance your expertise in recruitment, training, and talent management, while mastering social dynamics and building stronger interpersonal relationships.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Finance, Law, & Risk Management",
      desc: "Strengthen your expertise in financial management, master business law in Madagascar, and analyze risks to safeguard compliance and boost profitability.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          ></path>
        </svg>
      ),
    },
    {
      title: "Marketing & Business Development",
      desc: "Boost your sales and enhance customer loyalty. Turn marketing strategies into measurable business growth.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Economics & Corporate Social Responsibility (CSR)",
      desc: "Understand the global economic environment and integrate sustainable development and CSR principles. Make sustainability a strategic driver for your organization.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Innovation & Business Languages",
      desc: "Develop innovative thinking and master effective project management techniques. Strengthen your professional communication skills to succeed in a global business environment.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="training" className="pt-8 pb-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[#C5A059] uppercase tracking-widest mb-4">
          Corporate Training Program
        </h2>
        <h3 className="text-5xl font-serif">
          Learn and <span className="italic">Grow</span> with Us !
        </h3>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Every skill gained brings your team closer to excellence. Partner with
          us to empower your workforce and confidently tackle the challenges of
          today’s market.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-10 glass rounded-3xl border-t-4 border-[#C5A059] hover:translate-y-[-10px] transition-transform"
          >
            <div className="mb-6 text-[#C5A059]">{course.icon}</div>
            <h4 className="text-2xl font-serif mb-4">{course.title}</h4>
            <p className="text-sm text-gray-500 text-justify">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
