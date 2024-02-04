import * as Tone from 'tone';

function Button() {
    const handleTone = () => {
        const synth = new Tone.FMSynth();
        const feedbackDelay = new Tone.FeedbackDelay();
        synth.connect(feedbackDelay)
        feedbackDelay.toDestination();
        synth.triggerAttackRelease("E3", "8n")
    }
    return (
        <button className="btn" onClick={handleTone}>Check Here!</button>
    )
}
export default Button;