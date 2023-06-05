export type deskTop = boolean;

export type setHoverLink = (value: boolean) => void;

export type setMenuActive = (value: boolean) => void;

export type HeaderProps = {
  setHoverLink: setHoverLink;
  setMenuActive: setMenuActive;
  deskTop: deskTop;
};

export type CursorContextType = boolean;

export type MenuActiveType = boolean;

export type ScrollContextType = boolean;
