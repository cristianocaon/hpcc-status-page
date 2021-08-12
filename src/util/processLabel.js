const processLabel = (label) => {
  if (label === 'CG') return 'Completing';
  else if (label === 'OT') return 'Other';
  else if (label === 'PD') return 'Pending';
  else if (label === 'R') return 'Running';
  else if (label === 'alloc_cpu') return 'CPU Allocation'
  else if (label === 'idle_cpu') return 'CPU Idle';
  else if (label === 'other_cpu') return 'Other';
  else if (label === 'allocated') return 'Fully Allocated';
  else if (label === 'mixed') return 'Partially Allocated';
  else if (label === 'allocated' || label === 'down'
    || label === 'drained' || label === 'draining' || label === 'idle'
    || label === 'other' || label === 'reserved') return label.charAt(0).toUpperCase() + label.slice(1);
}

export default processLabel;
