function solution(bandage, health, attacks) {
    const [t,x,y]=bandage;
    let currentTime=0;
    let currentHealth=health;
    
    for(const [attackTime,damage] of attacks){
        let healTime= attackTime-currentTime-1;
        currentHealth=currentHealth+x*healTime;
        while(healTime>=t){
            currentHealth+=y;
            healTime-=t;
        }
        if(currentHealth>=health) currentHealth = health;
        currentHealth-=damage;
        currentTime=attackTime;
        
        if(currentHealth<=0) return -1;
    }
    
    return currentHealth;
}