// src/components/profiles/DalilaDev.jsx
import { useState } from 'react';

const SNIPPETS = {
  kotlin: [
    "// Kotlin / Android UI",
    "@Composable",
    "fun TeamCard(name: String) {",
    "    Text(text = \"Dev: $name\", style = MaterialTheme.typography.h6)",
    "    Button(onClick = { /* navigate */ }) { Text(\"Explorar\") }",
    "}"
  ],
  csharp: [
    "// C# / OOP Architecture",
    "public class SoftwareDeveloper : TeamMember {",
    "    public string Speciality { get; set; } = \"Interactive Apps\";",
    "    public void BuildSolution() => Console.WriteLine(\"Solution ready!\");",
    "}"
  ],
  java: [
    "// Java Core Service",
    "public interface CreativeModule {",
    "    boolean validateExperience(String candidate);",
    "    void renderInteractiveCanvas();",
    "}"
  ]
};

export default function DalilaDev() {
  const [selectedLang, setSelectedLang] = useState('kotlin');

  return (
    <div style={{
      background: '#0a0c16',
      border: '1px solid #c084fc',
      borderRadius: '12px',
      padding: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'monospace'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(192, 132, 252, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        <span style={{ color: '#c084fc' }}>dalila@creative-core:~$</span>
        <span style={{ color: '#e879f9' }}>OOP / MOBILE MODULE</span>
      </div>

      <div style={{ background: '#05060d', padding: '1rem', borderRadius: '6px', minHeight: '130px', marginBottom: '1rem', color: '#f3e8ff' }}>
        {SNIPPETS[selectedLang].map((line, i) => (
          <p key={i} style={{ margin: '0.2rem 0', fontSize: '0.88rem' }}>{line}</p>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          type="button"
          onClick={() => setSelectedLang('kotlin')}
          style={{
            background: selectedLang === 'kotlin' ? '#c084fc' : 'transparent',
            color: selectedLang === 'kotlin' ? '#0a0c16' : '#c084fc',
            border: '1px solid #c084fc',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          KOTLIN
        </button>
        <button
          type="button"
          onClick={() => setSelectedLang('csharp')}
          style={{
            background: selectedLang === 'csharp' ? '#c084fc' : 'transparent',
            color: selectedLang === 'csharp' ? '#0a0c16' : '#c084fc',
            border: '1px solid #c084fc',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          C#
        </button>
        <button
          type="button"
          onClick={() => setSelectedLang('java')}
          style={{
            background: selectedLang === 'java' ? '#c084fc' : 'transparent',
            color: selectedLang === 'java' ? '#0a0c16' : '#c084fc',
            border: '1px solid #c084fc',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          JAVA
        </button>
      </div>
    </div>
  );
}