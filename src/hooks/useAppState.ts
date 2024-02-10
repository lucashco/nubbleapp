import {useState, useEffect} from 'react';
import {AppState} from 'react-native';

export function useAppState() {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const eventSubscriber = AppState.addEventListener('change', state => {
      setAppState(state);
    });

    return eventSubscriber.remove;
  }, []);

  return {appState};
}
