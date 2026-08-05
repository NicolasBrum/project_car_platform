# Car Project Platform

SPA gratuita para que usuários enviem fotos de seus carros e recebam sugestões de modificações com apoio de um assistente de IA.

## Arquitetura planejada

- Front end: React
- Back end: Java com Spring Boot
- Infraestrutura: Docker
- Estilo arquitetural: microserviços

## Git Flow

- `main`: releases estáveis em produção.
- `develop`: integração contínua das próximas entregas.
- `feature/*`: funcionalidades, criadas a partir de `develop`.
- `release/*`: estabilização de versões, criadas a partir de `develop`.
- `hotfix/*`: correções urgentes, criadas a partir de `main`.

