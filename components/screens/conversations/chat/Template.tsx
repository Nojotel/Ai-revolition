import React, { useState } from "react";

const Template = ({ onClickTemplate, templateText }: { onClickTemplate: (templateText: string) => void; templateText: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-4" style={{ maxWidth: "346px", maxHeight: "111px", width: "100%", height: "100%" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => onClickTemplate(templateText)}>
      <div className={`flex items-start border rounded-lg border-color p-4 ${isHovered ? "hovered" : ""}`}>
        <div className="ml-6 flex flex-col">
          <p className="text-texthover text-semibold text-lg pb-2" style={{ color: "#F6F6F6" }}>
            Название шаблона
          </p>
          <div className={`text-sm text-textlight ${isHovered ? "hovered" : ""}`}>{templateText}</div>
        </div>
      </div>

      <style jsx>{`
        .text-textlight {
          color: rgba(246, 246, 246, 0.4);
          transition: color 0.3s;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hovered {
          color: rgba(246, 246, 246);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Template;
