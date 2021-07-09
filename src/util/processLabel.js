const processLabel = (label) => {
  if (label === 'CG') return 'Completing';
  else if (label === 'OT') return 'Other';
  else if (label === 'PD') return 'Pending';
  else if (label === 'R') return 'Running';
  else if (label === 'alloc_cpu') return 'Allocated';
  else if (label === 'idle_cpu') return 'Idle';
  else if (label === 'other_cpu') return 'Other';
  else if (label === 'allocated' || label === 'down'
    || label === 'drained' || label === 'draining' || label === 'idle'
    || label === 'mixed' || label === 'other' || label === 'reserved') return label.charAt(0).toUpperCase() + label.slice(1);
}

export default processLabel;