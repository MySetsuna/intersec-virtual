import React from "react";

const IntersectionObserverBox = React.forwardRef((props, pref) => {
  const { parentDom, style, className, domProps = {} } = props;
  const ref = React.useRef(pref);
  const [isChildrenHidden, setChildrenHidden] = React.useState(true);
  const content = React.useMemo(
    () => (isChildrenHidden ? undefined : props.children),
    [isChildrenHidden, props.children]
  );
  const changeHiddenStatus = React.useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setChildrenHidden(false);
        if (!entry.isIntersecting) setChildrenHidden(true);
      });
    },
    [ref.current]
  );
  React.useEffect(() => {
    const observer = new IntersectionObserver(changeHiddenStatus, {
      threshold: 0,
      root: parentDom,
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} style={style} ref={ref} {...domProps}>
      {content}
    </div>
  );
});

export default IntersectionObserverBox;
