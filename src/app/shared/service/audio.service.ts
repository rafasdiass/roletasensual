import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private initialized = false;

  private async ensureStarted() {
    if (!this.initialized) {
      await Tone.start();
      this.initialized = true;
    }
  }

  async playHeartbeat() {
    await this.ensureStarted();
    const synth = new Tone.MembraneSynth({
      pitchDecay: 0.008,
      octaves: 2,
      envelope: { attack: 0.001, decay: 0.2, sustain: 0, release: 1 },
    }).toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease('C2', '8n', now);
    synth.triggerAttackRelease('C2', '8n', now + 0.3);
  }

  async playClick() {
    await this.ensureStarted();
    const synth = new Tone.Synth({
      oscillator: { type: 'square' },
      envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.1 },
    }).toDestination();
    synth.triggerAttackRelease('E5', '16n');
  }

  async playConfirm() {
    await this.ensureStarted();
    const synth = new Tone.DuoSynth({
      harmonicity: 1.5,
      voice0: {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.1, release: 0.5 },
      },
      voice1: {
        oscillator: { type: 'sine' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.1, release: 0.5 },
      },
    }).toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease('G4', '8n', now);
    synth.triggerAttackRelease('C5', '16n', now + 0.1);
  }

  /** Interrompe todos os agendamentos do Transport */
  stopAll() {
    const transport = Tone.getTransport();
    transport.stop();
    transport.cancel();
  }
}
