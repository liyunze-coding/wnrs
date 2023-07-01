import { contStyles, creditStyles, creditTitleStyles } from "./Credits.css";

const Credits = () => {
    return (
        <div className={creditStyles}>
            <div className={creditTitleStyles}>how & who</div>
            <div className={contStyles}>
                <b>How to play:</b> <br />
                Progress from level to level. Become more than strangers, one card at a time.
                <p>Refresh to reset card decks.</p>{" "}
                <p>
                    Made by{" "}
                    <a href="https://github.com/munjoonteo" target="_blank">
                        @munjoonteo
                    </a>{" "}
                    and{" "}
                    <a href="https://github.com/ilyues" target="_blank">
                        @ilyues
                    </a>
                    .
                </p>
                <p>
                    Modified by{" "}
                    <a href="https://github.com/liyunze-coding" target="_blank">
                        @liyunze-coding
                    </a>{" "}
                    with Dark mode toggle.
                </p>
            </div>
        </div>
    );
};

export default Credits;
