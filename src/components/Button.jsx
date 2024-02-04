import * as Tone from 'tone';

function Button() {
    const handleTone = () => {
        const synth = new Tone.Synth();
        const feedbackDelay = new Tone.FeedbackDelay();
        synth.connect(feedbackDelay)
        feedbackDelay.toDestination();
        synth.triggerAttackRelease("C4", "8n")
    }
    return (
        <button className="btn" onClick={handleTone}>Check Here!</button>
    )
}
export default Button;