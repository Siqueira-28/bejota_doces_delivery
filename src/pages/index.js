import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export default function Home() {
  return (
    <div>
      <h1>Bejota Doces</h1>
      <Card>
        <h2>Brigadeiro</h2>
        <Button>Adicionar</Button>
      </Card>
    </div>
  );
}
