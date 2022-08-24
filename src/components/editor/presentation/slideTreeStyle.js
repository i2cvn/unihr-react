export const treeStyle = {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "#dddddd",
      margin: 0,
      padding: 0,
      color: "#555555",
      fontFamily: "lucida grande ,tahoma,verdana,arial,sans-serif",
      fontSize: "14px"
    },
    node: {
      base: {
        position: "relative"
      },
      link: {
        cursor: "pointer",
        position: "relative",
        padding: "0px 5px",
        display: "block"
      },
      activeLink: {
        background: "#dddddd"
      },
      toggle: {
        base: {
          position: "relative",
          display: "inline-block",
          verticalAlign: "top",
          marginLeft: "-5px",
          height: "24px",
          width: "24px"
        },
        wrapper: {
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-6px 0 0 -6px",
          height: "12px"
        },
        height: 12,
        width: 12,
        arrow: {
          fill: "#9DA5AB",
          strokeWidth: 0
        }
      },
      header: {
        base: {
          display: "inline-block",
          verticalAlign: "top",
          color: "#555555"
        },
        connector: {
          width: "2px",
          height: "12px",
          borderLeft: "solid 2px black",
          borderBottom: "solid 2px black",
          position: "absolute",
          top: "0px",
          left: "-21px"
        },
        title: {
          lineHeight: "24px",
          verticalAlign: "middle"
        }
      },
      subtree: {
        listStyle: "none",
        paddingLeft: "19px"
      },
      loading: {
        color: "#E2C089"
      }
    }
  }
};
