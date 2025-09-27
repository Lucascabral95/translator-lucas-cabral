import { memo, useState } from "react";
import { AiFillSound, AiOutlineCopy } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { TooltipType } from "../../types";

interface ActionButtonsProps {
  onListen: () => void;
  onCopy: () => void;
  onDelete?: () => void;
}

const ActionButton = memo(
  ({
    Icon, 
    tooltipText, 
    onClick, 
    onMouseEnter, 
    onMouseLeave,
    isTooltipVisible
  }: any) => (
    <div className="contenedor-de-tooltip">
      <div className="icono icono-copy" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Icon className="icon" />
      </div>
      {isTooltipVisible && (
        <div className="informacion-icono">
          <p>{tooltipText}</p>
        </div>
      )}
    </div>
  )
);

const ActionButtons = memo(
  ({ onListen, onCopy, onDelete }: ActionButtonsProps): JSX.Element => {
    const [activeTooltip, setActiveTooltip] = useState<TooltipType>("");

    return (
      <div className="sonido-copiar">
        <ActionButton
          Icon={AiFillSound}
          tooltipText="Listen"
          onClick={onListen}
          onMouseEnter={() => setActiveTooltip("listen")}
          onMouseLeave={() => setActiveTooltip("")}
          isTooltipVisible={activeTooltip === "listen"}
        />
        <ActionButton
          Icon={AiOutlineCopy}
          tooltipText="Copy"
          onClick={onCopy}
          onMouseEnter={() => setActiveTooltip("copy")}
          onMouseLeave={() => setActiveTooltip("")}
          isTooltipVisible={activeTooltip === "copy"}
        />
        {onDelete && (
          <ActionButton
            Icon={MdDelete}
            tooltipText="Delete"
            onClick={onDelete}
            onMouseEnter={() => setActiveTooltip("delete")}
            onMouseLeave={() => setActiveTooltip("")}
            isTooltipVisible={activeTooltip === "delete"}
          />
        )}
      </div>
    );
  }
);

ActionButtons.displayName = "ActionButtons";

export default ActionButtons;
