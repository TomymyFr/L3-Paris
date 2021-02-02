import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineStation from './TimelineStation.js'
import TimelineStationEnd from './TimelineStationEnd.js'
import TimelineStationStart from './TimelineStationStart.js'


export default function ColorTimeline() {
  return (
    <Timeline align="alternate">
      <TimelineStationStart station="Pont de Levallois"/>
      <TimelineStation station="Anatole France" />
      <TimelineStation station="Louise Michel" />
      <TimelineStation station="Porte de Champerret" />
      <TimelineStation station="Pereire" />
      <TimelineStation station="Wagram" />
      <TimelineStation station="Malesherbes" />
      <TimelineStation station="Villiers" />
      <TimelineStation station="Europe" />
      <TimelineStation station="Anatole France" />
      <TimelineStation station="Saint-Lazare" />
      <TimelineStation station="Havre-Caumartin" />
      <TimelineStation station="Opéra" />
      <TimelineStation station="Quatre-Septembre" />
      <TimelineStation station="Bourse" />
      <TimelineStation station="Sentiers" />
      <TimelineStation station="Réaumur-Sébastopol" />
      <TimelineStation station="Art et Métiers" />
      <TimelineStation station="Temple" />
      <TimelineStation station="République" />
      <TimelineStation station="Parmentier" />
      <TimelineStation station="Rue Saint-Maur" />
      <TimelineStation station="Père Lachaise" />
      <TimelineStation station="Gambetta" />
      <TimelineStation station="Porte de Bagnolet" />
      <TimelineStation station="Père Lachaise" />
      <TimelineStationEnd station="Gallieni" />
    </Timeline>
  );
}