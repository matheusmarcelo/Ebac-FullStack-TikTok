import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="video__footer">
      <div className="videoFooter__text">
        <h3>@maatheus</h3>
        <p>Descrição do video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Titulo da musica</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://static.vecteezy.com/system/resources/previews/001/207/957/original/vinyl-record-png.png"
      />
    </div>
  );
}

export default VideoFooter;
