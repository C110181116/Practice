package Class0118;
abstract class defaultSet{
    abstract void superpower();
    abstract void weight();
    public void clothColor(){
        System.out.println("衣服顏色：紅、黑");
    }
    public void maskColor(){
        System.out.println("眼罩顏色：黑");
    }
}
class Dad extends defaultSet{
    @Override
    void superpower(){
        System.out.println("我不知道爸爸的超能力");
    }
    void weight(){
        System.out.println("爸爸最胖");
    }
}
class Mom extends defaultSet{
    @Override
    void superpower(){
        System.out.println("我也不知道媽媽的超能力");
    }
    void weight(){
        System.out.println("媽媽很瘦");
    }
}
public class abstractPractice {
    public static void main(String[] args) {
        Dad Bob = new Dad();
        Mom Helen = new Mom();
        Bob.superpower();
        Bob.weight();
        Bob.clothColor();
        Bob.maskColor();
        System.out.println("===================");
        Helen.superpower();
        Helen.weight();
        Helen.clothColor();
        Helen.maskColor();
    }
}
