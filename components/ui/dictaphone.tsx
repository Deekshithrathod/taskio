"use client";

import "regenerator-runtime";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	return (
		<div>
			<p>Microphone: {listening ? "on" : "off"}</p>
			<div className="flex gap-4">
				<button
					className="p-2 border border-red-200"
					onClick={() =>
						SpeechRecognition.startListening({
							continuous: true,
							language: "en-IN",
							interimResults: true,
						})
					}>
					Start
				</button>
				<button
					className="p-2 border border-red-200"
					onClick={SpeechRecognition.stopListening}>
					Stop
				</button>
				<button className="p-2 border border-red-200" onClick={resetTranscript}>
					Reset
				</button>
			</div>
			<p>{transcript}</p>
		</div>
	);
};
export default Dictaphone;
