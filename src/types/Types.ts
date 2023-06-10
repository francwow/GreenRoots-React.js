export type deskTop = boolean;

export type rotate = number;

export type setHoverLink = (value: boolean) => void;

export type setMenuActive = (value: boolean) => void;

export type HeaderProps = {
  setHoverLink: setHoverLink;
  setMenuActive: setMenuActive;
  deskTop: deskTop;
};

export type InicioProps = {
  setHoverLink: setHoverLink;
  setMenuActive: setMenuActive;
  deskTop: deskTop;
};

export type TiendaProps = {
  setHoverLink: setHoverLink;
  setMenuActive: setMenuActive;
  deskTop: deskTop;
  rotate: rotate;
};

export type CursorContextType = boolean;

export type MenuActiveType = boolean;

export type ScrollContextType = boolean;
