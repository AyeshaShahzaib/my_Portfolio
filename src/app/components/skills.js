// const skillsData = [
//     { name: "HTML", level: "90%" },
//     { name: "CSS", level: "85%" },
//     { name: "JavaScript", level: "80%" },
//     { name: "React", level: "75%" },
//     { name: "Next.js", level: "70%" },
//     { name: "Tailwind CSS", level: "80%" },
//   ];
  
//   const Skills = () => {
//     return (
//       <div className="w-full max-w-2xl">
//         <h3 className="text-2xl font-semibold text-primary mb-4">My Skills</h3>
//         <div className="space-y-6"> {/* Increased spacing */}
//           {skillsData.map((skill, index) => (
//             <div key={index} className="w-full bg-gray-700 rounded-full h-5 mb-2"> {/* Adjusted margin */}
//               <div
//                 className="bg-primary h-5 rounded-full"
//                 style={{ width: skill.level }}
//               ></div>
//               <span className="ml-4 text-sm font-medium text-gray-300">{`${skill.name}: ${skill.level}`}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Skills;
const skillsData = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Next.js", level: "70%" },
    { name: "Tailwind CSS", level: "80%" },
  ];
  
  const Skills = () => {
    return (
      <div className="w-full max-w-2xl">
        <h3 className="text-2xl font-semibold text-primary mb-8">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid layout */}
          {skillsData.map((skill, index) => (
            <div key={index} className="w-full bg-gray-700 rounded-full h-5 mb-4 relative">
              <div
                className="bg-primary h-5 rounded-full"
                style={{ width: skill.level }}
              ></div>
              <span className="absolute left-0 top-0 transform translate-y-full mt-1 text-sm font-medium text-gray-300">
                {`${skill.name}: ${skill.level}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  
 