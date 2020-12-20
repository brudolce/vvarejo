import AppStyles from "../../App.styles";

export default class PopupStyles extends AppStyles {
  
  public PopupContainer(visibile: boolean = false): Object {
    return {
      visibility: visibile?'visible':'hidden',
      position: "absolute",
      zIndex: 2,
      width: "100vw",
      height: "100vh",
      ...this.container(),
    };
  }
  
  public PopupBox(): Object {
    return {
      width:'300px',
      height:'400px',
      backgroundColor:this.white,
    };
  }

  public PopupExit(): Object {
    return {
      border:`solid ${this.black} 1px`,
      borderRadius:'25px',
      width: '20px',
      height: '20px',
      margin: "15px",
      backgroundColor:this.white,
      cursor: "pointer",
      ...this.container(),
      ...this.text(1)
    };
  }

  public Fading(visibile:boolean = false): Object {
    return {
      visibility: visibile?'visible':'hidden',
      position: "absolute",
      zIndex: 1,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(220, 220, 220)",
      opacity: 0.7,
    };
  }
  static factory(): PopupStyles {
    return new PopupStyles(false);
  }
}
