const ScrollBar = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const scrollPercentage = () => {
    const scrollProgress = document.getElementById("progress");
    const progressValue = document.getElementById("progress-value");
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (pos === 0) {
      //@ts-ignore
      scrollProgress.style.display = "none";
    } else {
      //@ts-ignore
      scrollProgress.style.display = "";
       //@ts-ignore
      const scrollValue = Math.round((pos * 100) / calcHeight);
      //@ts-ignore
      const valueContent = "⇧";
      //@ts-ignore
      scrollProgress.style.background = `conic-gradient(#1b8241 ${scrollValue}%,#2b294f ${scrollValue}%)`;
      //@ts-ignore
      progressValue.textContent = `${valueContent}`;
    }
  };
  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;
  return (
    <div>
      <div id="progress">
        <span onClick={scrollToTop} id="progress-value"></span>
      </div>
    </div>
  );
};

export default ScrollBar;
