import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function TimelineStation({station, couleur}) {
  const ColorDot = {backgroundColor : '#837902'}
    return (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={couleur || ColorDot}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{station}</TimelineContent>
        </TimelineItem>
    );
} 