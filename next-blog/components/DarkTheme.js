import React from "react";

const DarkTheme = () => {
  return (
    <style jsx global>{`
      /* Dark theme */
      :root {
        --background-color: rgb(29, 29, 29);
        --text-color: rgb(219, 219, 219);
        --link-color: rgba(255, 217, 0, 0.842);
      }
    `}</style>
  );
};

export default DarkTheme;
