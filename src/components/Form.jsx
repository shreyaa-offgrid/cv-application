import "../styles/Form.css"
import { genInfoFields, eduFields, expFields } from "../fields";
import { genInfoPlaceholders, eduPlaceholders, expPlaceholders } from "../placeholders";
import Section from "./Section";

export default function Form({
    generalInfo, education, experience,
    setGeneralInfo, setEducation, setExperience,
    onSaveEntry, onAddMore }) {
    return (
        <div className="form-container">
            <Section
                title="General Information"
                fields={genInfoFields}
                placeholders={genInfoPlaceholders}
                info={generalInfo}
                setInfo={setGeneralInfo}
            />
            <Section
                title="Education"
                fields={eduFields}
                placeholders={eduPlaceholders}
                entries={education}
                onSaveEntry={(id, data) => onSaveEntry(setEducation, id, data)}
                onAddMore={() => onAddMore(setEducation)}
            />
            <Section
                title="Experience"
                fields={expFields}
                placeholders={expPlaceholders}
                entries={experience}
                onSaveEntry={(id, data) => onSaveEntry(setExperience, id, data)}
                onAddMore={() => onAddMore(setExperience)}
            />
        </div>
    )
}