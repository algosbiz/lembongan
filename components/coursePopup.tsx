import { useEffect, useState } from "react";
import Image from "next/image";

interface CoursePopupProps {
  title?: string; // Tambahkan props title opsional
  courses: { title: string; description: string; image: string }[];
  onClose?: () => void;
}

export default function CoursePopup({ title = "Available Courses", courses, onClose }: CoursePopupProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setShow(true);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`} onClick={onClose}>
      <div className="relative w-[90%] max-w-5xl bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl transition-transform transform-gpu scale-100 hover:scale-[1.01]" onClick={(e) => e.stopPropagation()}>
        {/* Judul dinamis */}
        <h4 className="text-2xl font-semibold text-white text-center mb-8">{title}</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col items-start space-y-3">
              <div className="relative w-full h-40 sm:h-56 rounded-lg overflow-hidden">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">{course.title}</p>
                <p className="text-gray-300 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        {onClose && (
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-red-400 text-xl font-bold" aria-label="Close popup">
            ×
          </button>
        )}
      </div>
    </div>
  );
}
